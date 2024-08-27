import type { PlaywrightTestConfig } from "@playwright/test";
import { on } from "node:events";
import { dot } from "node:test/reporters";
const config:PlaywrightTestConfig = {

  //testMatch:["tests/browserContext.spec.ts"],
  use:{
    baseURL: 'https://www.flipkart.com/',
    headless: false,
    screenshot: "only-on-failure",
    video:"retain-on-failure",
  },
  retries:0,
  reporter:[["dot"], ["json", {
    outputFile:"jsonReports/jsonReport.json"
  }], ["html",{
    open:"never"
  }] ]

};

export default config;