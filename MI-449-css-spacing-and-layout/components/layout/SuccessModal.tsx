import { useEmail } from "@/lib/email"
import { useEffect } from "react"
import { FaCheck } from "react-icons/fa"

export const SuccessModal = () => {
  const {success, setSuccess} = useEmail()

  return (
    <div className={`${success ? 'visible modal-fade' : 'hidden'} fixed bottom-0 left-0 w-44 shadow-md bg-white`}>
      <h5 className="text-2xl text-green-500 text-center p-2">
        Email Sent <FaCheck className="inline" />
      </h5>
    </div>
  )
}