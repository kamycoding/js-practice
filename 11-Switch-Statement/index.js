////////////////////////////////////////////////
// ✅ Switch Statement – Multiple Conditions

// 🇬🇧 Use switch to check a value against multiple cases
// 🇩🇪 Switch-Anweisung zur Überprüfung mehrerer Bedingungen
const day = "monday";

switch (day) {
  case "monday": // day === "monday"
    console.log("Plan course structure"); // 🇬🇧 plan tasks for the course / 🇩🇪 Kursstruktur planen
    console.log("coding"); // 🇬🇧 do coding / 🇩🇪 programmieren
    break;
  case "tuesday":
    console.log("videography"); // 🇬🇧 video creation / 🇩🇪 Videoproduktion
    break;
  case "wednesday":
  case "thursday":
    console.log("training"); // 🇬🇧 learning/training / 🇩🇪 Training oder Lernen
    break;
  case "friday":
    console.log("sport"); // 🇬🇧 do sports / 🇩🇪 Sport machen
    break;
  case "saturday":
  case "sunday":
    console.log("weekend :|"); // 🇬🇧 weekend activities / 🇩🇪 Wochenende
    break;
  default:
    console.log("Not a valid"); // 🇬🇧 if day doesn't match / 🇩🇪 ungültiger Tag
}
