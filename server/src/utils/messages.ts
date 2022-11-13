export const messages = {
  hasCam:
    "An incident token has been created in your area. Please review your footage and add the report if needed: LINK",
  noCam:
    "An incident token has been created in your area. If you witnessed the event and would like to contribute a report, please do so here: LINK",
  seeIncident: "You can see all reports of the incident here: LINK",
};

export const hasCam = (link: string) =>
  `An incident token has been created in your area. Please review your footage and add the report if needed: ${link}`;

export const seeIncident = `You can see all reports of the incident here: ${process.env.IPFS_LINK}`;
