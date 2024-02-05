export const Color = {
  HIGHLIGH_COLOR: "#9bba70",
  NON_HIGHLIGH_COLOR: "#e5e7eb",
  WHITE_COLOR: "#FFFFFF",
  BLACK_COLOR: "#000000",
};

export const Text = {
  LOGO_TEXT: "This hair test is co-created with doctors",
  PRE_BUTTON: "Previous",
  NEXT_BUTTON: "NEXT",
  EXIT_BUTTON: "Exit",
  ASSESMENT: "Assessment Report",
  DETAIL: "Your Details",
  NAME: "Name:",
  PHONE: "Phone:",
  EMAIL: "Email:",
  AGE: "Age:",
  GENDER: "Gender",
  YEAR: "years",
  INFO: "Other Information",
  STAGE: "Male Pattern Hair Loss Stage:",
  FAMILY_HISTORY: "Family History:",
  DANDRUFF_STATUS: "Dandruff Status:",
  SLEEP_STATUS: "Sleep Status",
  UPLOADED_IMG: "Uploaded Image",
  UPLOAD_1: "Upload your scalp photo.",
  UPLOAD_2: "After you place the order, this photo will be used by:",
  UPLOAD_3: "Doctors - To analyze and prescribe your kits dosage.",
  UPLOAD_4: "Hair Coaches - To track your hair progress.",
  UPLOAD_5: "Upload Image",
  UPLOAD_6: "Submit",
  MALE: "Male",
  FEMALE: "Female",
  LABEL_1: "Before we start, can we get your name",
  LABEL_2: "Phone Number",
  LABEL_3: "Email",
  LABEL_4: "How old are you?",
  LABEL_5: "Please enter a valid name",
  LABEL_6: "Please enter a valid phone number",
  LABEL_7: "Invalid name. Please enter a valid name.",
  LABEL_8: "Invalid phone number. Please enter a valid number.",
  LABEL_9: "NEXT →",
  RADIO_1_T_1: "Mother or anyone from mother's side of the family",
  RADIO_1_T_2: "Father or anyone from father's side of the family",
  RADIO_1_T_3: "From both mother and father",
  RADIO_1_T_4: "None",
  RADIO_2_T_1: "Yes, mild that comes and goes",
  RADIO_2_T_2: "No",
  RADIO_2_T_3: "Yes, heavy dandruff that sticks to the scalp",
  RADIO_2_T_4: "I have Psoriasis",
  RADIO_2_T_5: "I have Seborrheic Dermatitis",
  RADIO_3_T_1: "Very peacefully for 6 to 8 hours",
  RADIO_3_T_2: "Disturbed sleep, I wake up at least one time during the night",
  RADIO_3_T_3: "Have difficulty falling asleep",
  RADIO_LABEL_1: "Do you have a family history of hair loss?",
  RADIO_LABEL_2: "Do you have dandruf?",
  RADIO_LABEL_3: "How well do you sleep?",
  STAGE_1: "Stage-1",
  STAGE_2: "Stage-2",
  STAGE_3: "Stage-3",
  STAGE_4: "Stage-4",
  STAGE_LABEL: "Which image best describes your hair loss?",
  START_1: "Hey there!",
  START_2: "Lets take the Traya hair test.",
  START_3: "TAKE HAIR TEST",
};

export const ImageUrl = {
  DETAIL_PAGE_URL_1:
    "https://form.traya.health/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftraya.a5a9cff0.png&w=96&q=75",
  DETAIL_PAGE_URL_2:
    "https://traya.health/cdn/shop/files/Rectangle_5_1.png?v=1675154983",
  SELFIE_IMG:
    "https://form.traya.health/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fselfie.af7a7f3c.png&w=256&q=75",
  LOGO_URL:
    "https://form.traya.health/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftraya.a5a9cff0.png&w=96&q=75",
  STAGE_URL_1:
    "https://form.traya.health/_next/static/media/stage2.89ee6681.svg",
  STAGE_URL_2:
    "https://form.traya.health/_next/static/media/stage1.ded3ad2d.svg",
  STAGE_URL_3:
    "https://form.traya.health/_next/static/media/stage4.ae5d18a6.svg",
  STAGE_URL_4:
    "https://form.traya.health/_next/static/media/stage6.fded0280.svg",
};

export const radioOptions1 = [
  Text.RADIO_1_T_1,
  Text.RADIO_1_T_2,
  Text.RADIO_1_T_3,
  Text.RADIO_1_T_4,
];

export const radioOptions2 = [
  Text.RADIO_2_T_1,
  Text.RADIO_2_T_2,
  Text.RADIO_2_T_3,
  Text.RADIO_2_T_4,
  Text.RADIO_2_T_5,
];

export const radioOptions3 = [
  Text.RADIO_3_T_1,
  Text.RADIO_3_T_2,
  Text.RADIO_3_T_3,
];

export const stages = [
  {
    text: Text.STAGE_1,
    url: ImageUrl.STAGE_URL_1,
  },
  {
    text: Text.STAGE_2,
    url: ImageUrl.STAGE_URL_2,
  },
  {
    text: Text.STAGE_3,
    url: ImageUrl.STAGE_URL_3,
  },
  {
    text: Text.STAGE_4,
    url: ImageUrl.STAGE_URL_4,
  },
];

export const highlightCard = (index, currentStep) => {
  if (currentStep <= 4) {
    return {
      background: index === 0 ? Color.HIGHLIGH_COLOR : Color.NON_HIGHLIGH_COLOR,
      color: index === 0 ? Color.WHITE_COLOR : Color.BLACK_COLOR,
    };
  } else if (currentStep <= 6) {
    return {
      background: index === 1 ? Color.HIGHLIGH_COLOR : Color.NON_HIGHLIGH_COLOR,
      color: index === 1 ? Color.WHITE_COLOR : Color.BLACK_COLOR,
    };
  } else if (currentStep <= 8) {
    return {
      background: index === 2 ? Color.HIGHLIGH_COLOR : Color.NON_HIGHLIGH_COLOR,
      color: index === 2 ? Color.WHITE_COLOR : Color.BLACK_COLOR,
    };
  } else {
    return {
      background: index === 3 ? Color.HIGHLIGH_COLOR : Color.NON_HIGHLIGH_COLOR,
      color: index === 3 ? Color.WHITE_COLOR : Color.BLACK_COLOR,
    };
  }
};

export const cardGender = [{ text: Text.MALE }, { text: Text.FEMALE }];
