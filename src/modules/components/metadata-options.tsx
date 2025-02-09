import { useFormEditor } from "./form-context";
import { Checkbox } from "../ui/checkbox"

export default function MetadataOptionsBox() {
  const { metadata, setMetadata } = useFormEditor();

  return (
    <div className="p-4">
      <div className="border border-zinc-300 p-4 rounded-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="recaptcha" checked={metadata.reCAPTCHA} onCheckedChange={
              () => setMetadata({ ...metadata, reCAPTCHA: !metadata.reCAPTCHA })
            }/>
            <label
              htmlFor="recaptcha"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              reCAPTCHA challenge is required for this form
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="payment" checked={metadata.payment} onCheckedChange={
              () => setMetadata({ ...metadata, payment: !metadata.payment })
            }/>
            <label
              htmlFor="payment"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Payment is required for this form
            </label>
          </div>
          {metadata.payment && (<>
          <div className="flex items-center space-x-2">
            <Checkbox id="discount" checked={metadata.discountShown} onCheckedChange={
              () => setMetadata({ ...metadata, discountShown: !metadata.discountShown })
            }/>
            <label
              htmlFor="discount"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Discount field to be shown for this form
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="tax" checked={metadata.taxIncluded} onCheckedChange={
              () => setMetadata({ ...metadata, taxIncluded: !metadata.taxIncluded })
            }/>
            <label
              htmlFor="tax"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Tax included in prices on this form
            </label>
          </div></>)}
        </div>
      </div>
    </div>
  )
}
