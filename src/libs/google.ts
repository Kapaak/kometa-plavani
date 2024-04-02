import { GoogleSpreadsheet } from "google-spreadsheet";

const doc = new GoogleSpreadsheet(process.env.NEXT_PUBLIC_SPREADSHEET_ID);

//pokud neni defined, tak hazi no key or key filed defined err
const authCredentials = {
  client_email: process.env.NEXT_PUBLIC_CLIENT_EMAIL ?? "",
  private_key: process.env.NEXT_PUBLIC_PRIVATE_KEY?.replace(/\\n/g, "\n") ?? "",
};

export const appendSpreadsheet = async (row: any, sheetId: string) => {
  await doc.useServiceAccountAuth(authCredentials);
  // loads document properties and worksheets
  await doc.loadInfo();
  const sheet = doc.sheetsById[sheetId];

  return await sheet.addRow(row);
};

export const getRowsBySheetId = async (sheetId: string) => {
  await doc.useServiceAccountAuth(authCredentials);

  await doc.loadInfo();

  const sheet = doc.sheetsById[sheetId];
  return await sheet.getRows();
};

export const getAllSheets = async (sheetIds: Array<string>) => {
  try {
    await doc.useServiceAccountAuth(authCredentials);

    await doc.loadInfo();

    return sheetIds?.map((sheetId) => doc.sheetsById[sheetId].getRows());
  } catch (e) {
    console.log("get all sheets:" + e);
  }
};
