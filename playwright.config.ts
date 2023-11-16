import type { PlaywrightTestConfig } from "@playwright/test";
const config:PlaywrightTestConfig = {

  //testMatch:["tests/login.test.ts"]

  testMatch:["tests/checkbox.test.ts"]
};

export default config;