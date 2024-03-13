import { useFormContext, Controller} from 'react-hook-form';
import { Label } from '@radix-ui/react-label';
import { Input } from './input';

const RHFTextfield = ({name, defaultValue, disabled = false, label, required = true,  type = "text"}:{
    name : string,
    defaultValue ?: string | number,
    disabled ?: boolean,
    label : string,
    required ?: boolean,
    type ?: string,
}) => {
    const { control, setValue,getValues } = useFormContext();
  return (
    <Controller
    name={name}
    control={control}
    defaultValue={defaultValue || defaultValue == 0 ? defaultValue : ""}
    render={({ field }) => (
        <div>
              <Label className="">{label}</Label>
              <Input
                {...field}
                type={type}
                id={`${getValues('type')}_${name}`}
                className="p-2 mt-2 border-2 bg-blue-50  md:p-5"
                placeholder="Enter email"
                disabled = {disabled}
                required = {required}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onBlur={(e: any) => {
                    if (e.target.value && type === "number" && e.target.value !== ""){ 
                        setValue(name, `${e.target.valueAsNumber}`);
                        }
                }}
              />
        </div>
    )}
    />
  )
  
}

export default RHFTextfield
