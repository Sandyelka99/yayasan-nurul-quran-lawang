/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Konfigurasi global aplikasi Yayasan Nurul Quran Lawang
 */

// Nomor WhatsApp admin keuangan untuk konfirmasi donasi
export const WHATSAPP_FINANCE_PHONE = "6281234012041";

// URL base WhatsApp Web API
export const WHATSAPP_API_BASE = "https://wa.me";

/**
 * Helper untuk generate WhatsApp URL dengan pesan terenkripsi
 * @param phoneNumber - Nomor telepon tanpa +
 * @param message - Pesan yang akan dikirim
 * @returns Full WhatsApp URL
 */
export const generateWhatsAppURL = (phoneNumber: string, message: string): string => {
  const encodedMessage = encodeURIComponent(message);
  return `${WHATSAPP_API_BASE}/${phoneNumber}?text=${encodedMessage}`;
};

/**
 * Helper untuk membuat pesan konfirmasi donasi terformat
 */
export const generateDonationConfirmationMessage = (
  programName: string,
  amount: number,
  paymentMethod: string,
  donorName: string,
  email: string,
  phone: string
): string => {
  const emailDisplay = email.trim() ? email : "-";
  return `Assalamu'alaikum Admin Keuangan Yayasan Nurul Quran.

Saya ingin mengonfirmasi donasi/wakaf dengan rincian berikut:

Program: ${programName}
Nominal: Rp ${amount.toLocaleString("id-ID")}
Metode Pembayaran: ${paymentMethod}
Nama Donatur: ${donorName}
Email: ${emailDisplay}
No. WhatsApp Donatur: ${phone}

Saya sudah melakukan pembayaran/transfer sesuai instruksi yang tersedia di website.

Mohon dibantu pencatatan dan konfirmasinya.
Jazakumullahu khairan.`;
};
