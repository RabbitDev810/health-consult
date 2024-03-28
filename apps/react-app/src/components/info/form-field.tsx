import { TextField } from "@mui/material";
import { API, graphqlOperation } from "aws-amplify";

type FormFieldProps = {
  label: string;
  type?: string;
  placeholder?: string;
  width?: string;
  onChange?: (e: any) => void;
  value?: string;
  multiline?: boolean;
  minRows?: number;
  options?: any;
  formValues?: any;
  labelShrink?: boolean;
};

const FormField = (props: FormFieldProps) => {
  const {
    label,
    type,
    placeholder,
    width,
    onChange,
    value,
    minRows,
    options,
    formValues,
    labelShrink,
  } = props;

  const handleFocusOut = async () => {
    if (formValues) {
      await API.graphql(
        graphqlOperation(formValues.mutationString, {
          input: formValues.values,
        })
      );
    }
  };

  return (
    <TextField
      style={{ width: width }}
      variant="outlined"
      label={label}
      placeholder={placeholder ? placeholder : ""}
      multiline
      minRows={minRows ? minRows : 1}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onBlur={handleFocusOut}
      InputLabelProps={{ shrink: labelShrink }}
    />
  );
};

export default FormField;
