"use client"

import { useState } from "react"
import { Button } from "@/app/ui/button"
import { Input } from "@/app/ui/input"

interface VoucherProps {
  onVoucherApply: (voucherCode: string) => void
  voucherApplied: boolean
}

const Voucher: React.FC<VoucherProps> = ({ onVoucherApply, voucherApplied }) => {
  const [voucherCode, setVoucherCode] = useState<string>("")

  const handleVoucherChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVoucherCode(e.target.value)
  }

  const handleApplyClick = () => {
    if (voucherCode) {
      onVoucherApply(voucherCode)
    } else {
      alert("Please enter a voucher code.")
    }
  }

  return (
    <div className="my-8">
      <h2 className="text-2xl font-semibold mb-4">Apply Voucher</h2>
      <div className="flex items-center space-x-2">
        <Input
          type="text"
          id="voucherCode"
          value={voucherCode}
          onChange={handleVoucherChange}
          placeholder="Enter voucher code"
          className="flex-grow"
        />
        <Button onClick={handleApplyClick} disabled={voucherApplied}>
          Apply
        </Button>
      </div>
      {voucherApplied && <p className="text-green-600 mt-2">Voucher applied successfully!</p>}
    </div>
  )
}

export default Voucher

