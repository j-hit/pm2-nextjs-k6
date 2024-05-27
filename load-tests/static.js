import { check, sleep } from "k6";
import http from "k6/http";

const BASE_URL = "http://localhost:3000/static";

export const options = {
  scenarios: {
    contacts: {
      executor: "ramping-vus",
      startVUs: 1,
      /**
       * Runs for 3 minutes
       */
      stages: [
        { target: 10, duration: "10s" },
        { target: 20, duration: "10s" },
        { target: 40, duration: "10s" },
        { target: 80, duration: "10s" },
        { target: 100, duration: "10s" },
        { target: 100, duration: "60s" },
        { target: 80, duration: "10s" },
        { target: 40, duration: "10s" },
        { target: 20, duration: "10s" },
        { target: 10, duration: "10s" },
        { target: 1, duration: "10s" },
      ],
    },
  },
  thresholds: {
    /**
     * p(95) = 95% or requests
     */
    http_req_blocked: ["p(95)<50"],
    http_req_connecting: ["p(95)<10"],
    http_req_tls_handshaking: ["p(95)<10"],
    http_req_sending: ["p(95)<10"],
    http_req_waiting: ["p(95)<1500"],
    http_req_receiving: ["p(95)<100"],
    http_req_duration: ["p(95)<2000"],
  },
};

/**
 * This load-test uses a maximum of 1 request per virtual user per second with a maximum of 3200 virtual users.
 * Resulting in approximately a maximum of 100 requests per second.
 * The test ramps up the amount of virtual users and then ramps down again
 */
export default async function mainFunction() {
  const homePageUrl = `${BASE_URL}`;

  const response = http.get(homePageUrl);

  check(response, {
    "status is 200": (r) => r.status === 200,
  });

  sleep(1);
}
