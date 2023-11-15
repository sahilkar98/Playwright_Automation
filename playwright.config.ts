import type { PlaywrightTestConfig } from "@playwright/test";
const config:PlaywrightTestConfig = {

  //testMatch:["tests/login.test.ts"]

  testMatch:["tests/openMRS.register.ts"]
};

export default config;