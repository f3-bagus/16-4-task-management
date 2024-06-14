import React, { useState, useEffect } from "react";
import "../../App.css";
export default function VerifyAcc() {
  const [otp, setOtp] = useState("");
  const [countdown, setCountdown] = useState(300); // 5 menit dalam detik
  const [otpExpired, setOtpExpired] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (countdown > 0) {
        setCountdown((prevCountdown) => prevCountdown - 1);
      } else {
        setOtpExpired(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown]);

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleVerify = () => {
    if (otpExpired) {
      console.log("Kode OTP telah kadaluwarsa");
      // Tambahkan logika untuk menangani kadaluwarsa OTP
    } else {
      // Logika untuk verifikasi OTP
      console.log("OTP:", otp);
    }
  };

  const handleResendOtp = () => {
    setCountdown(300); // Reset countdown
    setOtpExpired(false);
    // Logika untuk mengirim ulang OTP
    console.log("Mengirim ulang OTP...");
  };

  return (
    <div className="container mx-auto px-4 h-full">
      <div className="flex content-center items-center justify-center h-full">
        <div className="w-full lg:w-6/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
            <div className="rounded-t mb-0 px-6 py-6">
              <div className="text-center mb-3">
                <h6 className="text-blueGray-500 text-sm font-bold">
                  Verifikasi Akun
                </h6>
              </div>
              <hr className="mt-6 border-b-1 border-blueGray-300" />
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <div className="text-blueGray-400 text-center mb-3 font-bold">
                <small>Masukkan Kode OTP</small>
              </div>
              <form>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-otp"
                  >
                    Kode OTP
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Kode OTP"
                    value={otp}
                    onChange={handleOtpChange}
                  />
                </div>

                <div className="text-center mt-6">
                  <button
                    className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleVerify}
                  >
                    Verifikasi
                  </button>
                </div>
              </form>

              {countdown > 0 && (
                <div className="text-center mt-6">
                  <small>
                    Waktu tersisa: {Math.floor(countdown / 60)}:
                    {countdown % 60 < 10
                      ? `0${countdown % 60}`
                      : countdown % 60}
                  </small>
                </div>
              )}

              {otpExpired && (
                <div className="text-center mt-6 OTP">
                  <small onClick={handleResendOtp}>Kirim Ulang OTP</small>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
