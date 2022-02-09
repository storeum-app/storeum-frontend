import {combineReducers} from "redux";
import auth from "./auth";
import folders from "./folders";
import notes from "./notes";
import folderActionsModal from "./folder-actions-modal";

export default combineReducers({
  auth,
  folders,
  notes,
  folderActionsModal,
});