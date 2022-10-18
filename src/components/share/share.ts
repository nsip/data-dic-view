import { ref, reactive } from "vue";
import { fetchNoBody, fetchBodyForm, mEmpty } from "./fetch";
import { entityType } from "./Entity";
import { collectionType } from "./Collection";

//////////////////////////////////////////////////////////////////////////////////////

export const IP_CMS = "http://127.0.0.1:8888/";

export const loginOK = ref(false);
export const loginUser = ref("");
export const loginToken = ref(""); // without 'Bearer '

export const pageMode = ref("normal"); // 'normal' or 'approval'

export const selKind = ref(""); // which kind for current selection 'entity' or 'collection'
export const selItem = ref(""); // which item name is currently selected
export const selItemSubStatus = ref(false); // selected item subscription status
export const selEntity = reactive(new entityType()); // entity content
export const selCollection = reactive(new collectionType()); // collection content
export const aim = ref(""); // what item want to be search
export const lsEntity = ref([]); // name list of entity
export const lsCollection = ref([]); // name list of collection
export const selClsPath = ref([]); // current selected item's class path
export const selChildren = ref([]); // current selected item's children
export const lsSubscribed = ref([]); // subscribed item name list

//////////////////////////////////////////////////////////////////////////////////////

export const postLogin = async (uname: string, pwd: string) => {
  const mForm = new Map<string, any>([
    ["uname", uname],
    ["pwd", pwd],
  ]);
  const rt = (await fetchBodyForm(
    `/api/user/pub/sign-in`,
    "POST",
    mEmpty,
    mForm,
    ""
  )) as any[];
  if (rt[1] != 200) {
    alert(rt[0]);
    return false;
  }
  const auth: string = rt[0].auth;
  loginToken.value = auth.replace("Bearer ", "");
  return true;
};

export const postSignUp = async (uname: string, email: string, pwd: string) => {
  const mForm = new Map<string, any>([
    ["uname", uname],
    ["email", email],
    ["pwd", pwd],
  ]);
  const rt = (await fetchBodyForm(
    `/api/user/pub/sign-up`,
    "POST",
    mEmpty,
    mForm,
    ""
  )) as any[];
  if (rt[1] != 200) {
    alert(rt[0]);
    return false;
  }
  return true;
};

export const postEmailVerify = async (uname: string, code: string) => {
  const mForm = new Map<string, any>([
    ["uname", uname],
    ["code", code],
  ]);
  const rt = (await fetchBodyForm(
    `/api/user/pub/verify-email`,
    "POST",
    mEmpty,
    mForm,
    ""
  )) as any[];
  if (rt[1] != 200) {
    alert(rt[0]);
    return false;
  }
  return true;
};

//////////////////////////////////////////////////////////////////////////////////////

export const getItemKind = async (name: string, dbcol: string) => {
  const mParam = new Map<string, any>([
    ["name", name],
    ["dbcol", dbcol],
  ]);
  const rt = (await fetchNoBody(
    `api/dictionary/pub/kind`,
    "GET",
    mParam,
    ""
  )) as any[];
  if (rt[1] != 200) {
    alert(rt[0]);
    return;
  }
  return rt[0];
};

export const getContent = async (name: string, dbcol: string) => {
  const mParam = new Map<string, any>([
    ["name", name],
    ["dbcol", dbcol],
  ]);
  const rt = (await fetchNoBody(
    `api/dictionary/pub/one`,
    "GET",
    mParam,
    ""
  )) as any[];
  if (rt[1] != 200) {
    alert(rt[0]);
    return;
  }
  return rt[0];
};

export const getColEntities = async (name: string) => {
  const mParam = new Map<string, any>([["colname", name]]);
  const rt = (await fetchNoBody(
    `api/dictionary/pub/colentities`,
    "GET",
    mParam,
    ""
  )) as any[];
  if (rt[1] != 200) {
    alert(rt[0]);
    return;
  }
  return rt[0];
};

export const getClsInfo = async (name: string) => {
  const mParam = new Map<string, any>([["entname", name]]);
  const rt = (await fetchNoBody(
    `api/dictionary/pub/entclasses`,
    "GET",
    mParam,
    ""
  )) as any[];
  if (rt[1] != 200) {
    alert(rt[0]);
    return;
  }
  return rt[0];
};

export const getList = async (kind: string, dbcol: string) => {
  const mParam = new Map<string, any>([["dbcol", dbcol]]);
  const rt = (await fetchNoBody(
    `api/dictionary/pub/list/${kind}`,
    "GET",
    mParam,
    ""
  )) as any[];
  if (rt[1] != 200) {
    alert(rt[0]);
    return;
  }
  return rt[0];
};

export const getSearch = async (lookfor: string) => {
  const mParam = new Map<string, any>([
    ["aim", lookfor],
    ["ignorecase", true],
  ]);
  const rt = (await fetchNoBody(
    `api/dictionary/pub/search`,
    "GET",
    mParam,
    ""
  )) as any[];
  if (rt[1] != 200) {
    alert(rt[0]);
    return;
  }
  return rt[0];
};

export const putApprove = async (name: string, kind: string) => {
  const mParam = new Map<string, any>([
    ["name", name],
    ["kind", kind],
  ]);
  const rt = (await fetchNoBody(
    `api/dictionary/auth/approve`,
    "PUT",
    mParam,
    "Bearer " + loginToken.value
  )) as any[];
  if (rt[1] != 200) {
    alert(rt[0]);
    return false;
  }
  return true;
};

export const putSubscribe = async (name: string, kind: string) => {
  const mParam = new Map<string, any>([
    ["name", name],
    ["kind", kind],
  ]);
  const rt = (await fetchNoBody(
    `api/dictionary/auth/subscribe`,
    "PUT",
    mParam,
    "Bearer " + loginToken.value
  )) as any[];
  if (rt[1] != 200) {
    alert(rt[0]);
    return;
  }
  return rt[0];
};

export const getListSubscription = async () => {
  const rt = (await fetchNoBody(
    `api/dictionary/auth/list/subscribe`,
    "GET",
    mEmpty,
    "Bearer " + loginToken.value
  )) as any[];
  if (rt[1] != 200) {
    alert(rt[0]);
    return;
  }
  return rt[0];
};

export const getSubscriptionStatus = async (name: string) => {
  const mParam = new Map<string, any>([["name", name]]);
  const rt = (await fetchNoBody(
    `api/dictionary/auth/check/subscribe`,
    "GET",
    mParam,
    "Bearer " + loginToken.value
  )) as any[];
  if (rt[1] != 200) {
    alert(rt[0]);
    return;
  }
  return rt[0];
};

////////////////////////////////////////////////////

export const getAdminListUser = async (field: string) => {
  const rt = (await fetchNoBody(
    `api/admin/user/list/` + field,
    "GET",
    mEmpty,
    "Bearer " + loginToken.value
  )) as any[];
  if (rt[1] != 200) {
    alert(rt[0]);
    return;
  }
  return rt[0];
};

export const getAdminListSubscription = async (uname: string) => {
  const mParam = new Map<string, any>([["uname", uname]]);
  const rt = (await fetchNoBody(
    `api/admin/user/action-list/subscribe`,
    "GET",
    mParam,
    "Bearer " + loginToken.value
  )) as any[];
  if (rt[1] != 200) {
    alert(rt[0]);
    return;
  }
  return rt[0];
};

export const postAdminSendEmail = async (
  title: string,
  content: string,
  ...recipients: string[]
) => {
  const mForm = new Map<string, any>([
    ["unames", recipients != null ? recipients.join(",") : "recipients-missing-error"],
    ["subject", title],
    ["body", content],
  ]);
  const rt = (await fetchBodyForm(
    `api/admin/email`,
    "POST",
    mEmpty,
    mForm,
    "Bearer " + loginToken.value
  )) as any[];
  if (rt[1] != 200) {
    alert(rt[0]);
    return;
  }
  return rt[0];
};

//////////////////////////////////////////////////////////////////////////////////////

export const LoadCurrentList = async (kind: string, dbcol: string) => {
  // get list of item
  switch (kind) {
    case "entity":
      lsEntity.value = await getList(kind, dbcol);
      break;
    case "collection":
      lsCollection.value = await getList(kind, dbcol);
      break;
  }

  // get list of subscribed item
  lsSubscribed.value = await getListSubscription();
};

export const Refresh = async (name: any, dbcol: string) => {
  // alert(`into refresh, name is [${name}], dbcol is [${dbcol}]`)

  // set current selected item
  selItem.value = name;

  // selected for searching
  aim.value = name;

  // selected kind
  selKind.value = await getItemKind(name, dbcol);

  // get content
  const content = await getContent(name, dbcol);

  // set content to shared variables
  switch (selKind.value) {
    case "entity":
      selEntity.SetContent(content);
      break;

    case "collection":
      selCollection.SetContent(content);

      // get collection entities and set them to 'selCollection'
      selCollection.SetEntities(await getColEntities(name));
      break;
  }

  // get class info
  const clsinfo = await getClsInfo(name);
  selClsPath.value = clsinfo.DerivedPath;
  selChildren.value = clsinfo.Children;
};

export const Search = async () => {
  const list = await getSearch(aim.value.trim());
  lsEntity.value = list.Entities;
  lsCollection.value = list.Collections;
};
