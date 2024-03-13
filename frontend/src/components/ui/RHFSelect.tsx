import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Separator } from "@radix-ui/react-separator";
import { Controller, useFormContext } from "react-hook-form";

const RHFSelect = ({
  options,
  name,
  label,
}: {
  options: string[];
  name: string;
  label: string;
}) => {
  const { control,  getValues } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <>
          <Label className="">{label}</Label>
          <div className=" block">
            <Select {...field} onValueChange={field.onChange}>
              <SelectTrigger className="bg-blue-50 p-2 mt-2 border-2 md:p-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    options?.map((option, index) => (
                      <div key={index}>
                        <SelectItem value={option} id={`${getValues("type")}_${name}`}>{option}</SelectItem>
                        <Separator className="my-2" />
                      </div>
                    ))
                  }
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </>
      )}
    />
  );
};

export default RHFSelect;
