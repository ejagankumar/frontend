import './index.css';
import set from "lodash/set";
import get from "lodash/get";
import moment from "moment";
import { setFieldProperty, handleFieldChange } from "egov-ui-kit/redux/form/actions";
const formConfig = {
  name: "bussinessDetails",
  fields: {
    VasikaNo: {
      id: "vasikaNo",
      className:"bussinessDetails",
      jsonPath: "Properties[0].additionalDetails.vasikaNo",
      type: "textfield",
      floatingLabelText: "PT_COMMON_VASIKA_NO",
      hintText: "Vasika No",
      required: true,
      fullWidth: true,
    },
    vasikaDate: {
      id: "vasikaDate",
      className:"bussinessDetails",
      jsonPath: "Properties[0].additionalDetails.vasikaDate",
      type: "date",
      floatingLabelText: "PT_COMMON_VASIKA_DATE",
      hintText: "Vasika Date",
      required: true,
      fullWidth: true,
    },
    allotmentNo: {
      id: "allotmentNo",
      className:"bussinessDetails",
      jsonPath:"Properties[0].additionalDetails.allotmentNo" ,
      type: "textfield",
      floatingLabelText: "PT_COMMON_ALLOTMENT_NO",
      hintText: "Allotment No",
      required: true,
      fullWidth: true,
    },
    allotmentDate: {
      id: "allotmentDate",
      className:"bussinessDetails",
      jsonPath: "Properties[0].additionalDetails.allotmentDate",
      type: "date",
      floatingLabelText: "PT_COMMON_ALLOTMENT_DATE",
      hintText: "Allotment Date",
      required: true,
      fullWidth: true,
    },
    businessName: {
      id: "businessName",
      className:"bussinessDetails",
      jsonPath:"Properties[0].additionalDetails.businessName" ,
      type: "textfield",
      floatingLabelText: "PT_COMMON_BUSSINESS_NAME",
      hintText: "Bussiness Name",
      required: true,
      fullWidth: true,
    },
    remrks: {
      id: "remarks",
      className:"bussinessDetails",
      jsonPath: "Properties[0].additionalDetails.remrks",
      type: "textfield",
      floatingLabelText: "PT_COMMON_REMARKS",
      hintText: "Remarks",
      required: true,
      fullWidth: true,
    },
  },
  beforeInitForm: (action, store) => {
    try {
      let state = store.getState();
      let vasikaD =get(state.common.prepareFormData, "Properties[0].additionalDetails.vasikaDate", "");
      let vasikaDate=vasikaD ? new Date(vasikaD):null;
      let allotmentD =get(state.common.prepareFormData, "Properties[0].additionalDetails.allotmentDate", "");
      let allotmentDate=allotmentD ? new Date(allotmentD):null;
      set(action, "form.fields.vasikaDate.value",vasikaDate);
      set(action, "form.fields.allotmentDate.value",allotmentDate);
      set(action, "form.fields.VasikaNo.value", get(state.common.prepareFormData, "Properties[0].additionalDetails.vasikaNo", ""));
      set(action, "form.fields.allotmentNo.value", get(state.common.prepareFormData, "Properties[0].additionalDetails.allotmentNo", ""));
      set(action, "form.fields.businessName.value", get(state.common.prepareFormData, "Properties[0].additionalDetails.businessName", ""));
      set(action, "form.fields.remrks.value", get(state.common.prepareFormData, "Properties[0].additionalDetails.remrks", ""));
      return action;
    } catch (e) {
      console.log(e);
    }
  },
}
export default formConfig;