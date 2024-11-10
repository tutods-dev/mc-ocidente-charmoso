/**
 * Callback function to get the beginning of a contact url.
 * @param type Indicates if it's a phone number or an email.
 */
function getContactUrl(type: "email" | "phone") {
	if (type === "phone") {
		return "tel:+351";
	}

	return "mailto:";
}

/**
 * Callback function to format a phone number.
 * @param phone Phone number
 */
function getFormattedPhone(phone: string) {
	const regex = /.{1,3}/g;
	let formattedPhone = phone;

	if (phone.startsWith("+351")) {
		formattedPhone = phone.replace("+351", "");
	}

	return ["+351", formattedPhone.match(regex)].flat().join(" ");
}

/**
 * Callback function to retrieve the icon for each type of contact.
 * @param type Contact type
 */
function getContactIcon(type: "phone" | "email") {
	switch (type) {
		case "phone":
			return "ph ph-phone";

		case "email":
			return "ph ph-at";

		default:
			return "";
	}
}

export { getFormattedPhone, getContactIcon, getContactUrl };
