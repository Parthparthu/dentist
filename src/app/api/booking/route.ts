import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, date, time, service, email, message } = body;

    // 1. Validate required fields exist
    if (!name || !phone || !date || !time) {
      return NextResponse.json(
        { success: false, message: "Required fields (name, phone, date, time) are missing." },
        { status: 400 }
      );
    }

    // 2. Validate name length (minimum 2 characters)
    const trimmedName = name.trim();
    if (trimmedName.length < 2) {
      return NextResponse.json(
        { success: false, message: "Name must be at least 2 characters long." },
        { status: 400 }
      );
    }

    // 3. Validate phone number format (at least 10 digits)
    const digitCount = phone.replace(/\D/g, "").length;
    if (digitCount < 10) {
      return NextResponse.json(
        { success: false, message: "Phone number must contain at least 10 digits." },
        { status: 400 }
      );
    }

    // 4. Validate date is not in the past (timezone-safe local comparison)
    const dateParts = date.split("-").map(Number);
    if (dateParts.length !== 3 || dateParts.some(isNaN)) {
      return NextResponse.json(
        { success: false, message: "Invalid date format." },
        { status: 400 }
      );
    }
    const [year, month, day] = dateParts;
    const inputDate = new Date(year, month - 1, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (isNaN(inputDate.getTime()) || inputDate < today) {
      return NextResponse.json(
        { success: false, message: "Appointment date cannot be in the past." },
        { status: 400 }
      );
    }

    // 5. Validate time is present
    if (!time.trim()) {
      return NextResponse.json(
        { success: false, message: "Preferred time slot is required." },
        { status: 400 }
      );
    }

    // Obfuscated console logging for privacy (PII masking)
    const maskedPhone = phone.replace(/.(?=.{4})/g, "*");
    console.log("=== APPOINTMENT BOOKING REQUEST RECEIVED ===");
    console.log(`Status: Validated`);
    console.log(`Patient Name length: ${trimmedName.length} chars`);
    console.log(`Phone (Masked): ${maskedPhone}`);
    console.log(`Email Provided: ${!!email}`);
    console.log(`Preferred Date: ${date}`);
    console.log(`Preferred Time: ${time}`);
    console.log(`Service Requested: ${service || "General Consultation"}`);
    console.log(`Message Length: ${message ? message.length : 0} chars`);
    console.log("============================================");

    // =========================================================================
    // CRM / EMAIL / GOOGLE SHEETS / WHATSAPP INTEGRATION ADAPTER PLACEHOLDER
    // =========================================================================
    // To connect to a real CRM or notifications system in the future:
    // 1. Call your database helper: await db.bookings.create({ name, phone, date, ... });
    // 2. Connect to CRM (e.g. HubSpot, Salesforce): await hubspot.crm.contacts.create({ ... });
    // 3. Send SMS/WhatsApp confirmation via Twilio: await sendTwilioWhatsApp(phone, message);
    // 4. Append row to Google Sheets via googleapis: await appendToGoogleSheet({ name, phone, ... });
    // =========================================================================

    return NextResponse.json({
      success: true,
      message: "Appointment request received successfully.",
    });

  } catch (error) {
    console.error("Booking API error:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error." },
      { status: 500 }
    );
  }
}
