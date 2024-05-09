import { useRef, useState } from "react"

export default function OTPpage() {
    const [otp, setotp] = useState(new Array(4).fill(''));
    const inputRefs = useRef([]);

    function handleOTPChange(index, value) {
        const newOtp = [...otp];
        newOtp[index] = value;
        setotp(newOtp);

        if (value && index < 3)
            inputRefs.current[index + 1].focus();
    }

    function handleBackspace(index, e) { 
        if (e.key === "Backspace" && !otp[index] && inputRefs.current[index - 1]) {
            inputRefs.current[index - 1].focus();
        }
    }

    function handlePaste(index, e) {
        const copiedText = e.clipboardData.getData('text');
        if (copiedText.length === 4) {
            const newOTP = [...otp];
            for (let i = 0; i < copiedText.length; i++) {
                newOTP[index + i] = copiedText[i];
            }
            setotp(newOTP);
        } else {
            alert("Please paste a valid OTP");
            e.preventDefault();
        }
    }

    const handleSelection = function (index) {
    inputRefs.current[index].setSelectionRange(1, 1);

    if (index && !otp[index - 1]) {
      inputRefs.current[otp.indexOf("")].focus();
    }
  };

    return (
        <div className="h-screen flex justify-center items-center flex-col gap-10">
            <div className="text-center">
                <h1 className="font-serif m-0 p-0">Welcome to <span className="text-[#72FF26]">Ideation Axis</span></h1>
                <p className="m-0">OTP sent to your number</p>
            </div>

            <form action="" className="flex gap-3">
                {
                    otp.map((val, index) => {
                        return <input
                            type="text"
                            className="w-10 h-10 text-center rounded-lg"
                            key={index}
                            value={val}
                            maxLength={1}
                            ref={(id) => { inputRefs.current[index] = id }}
                            onChange={(e) => handleOTPChange(index, e.target.value)}
                            onKeyDown={(e) => handleBackspace(index, e)}
                            onPaste={(e) => handlePaste(index, e)}
                            onClick={() => handleSelection(index)}
                        />
                    })
                }
            </form>
        </div>
    )
}
