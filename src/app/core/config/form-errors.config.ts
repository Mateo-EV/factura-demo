export const FORM_ERRORS: {
  [errorKey: string]: string | { [controlName: string]: string };
} = {
  required: "El :field es obligatorio.",
  email: "El :field debe ser un correo válido.",
  minlength: {
    // nombre: "El :field debe tener al menos :min letras.",
    default: "El :field tiene muy pocos caracteres (mínimo :min).",
  },
  maxlength: {
    default: "El :field excede el máximo permitido de :max caracteres.",
  },
  pattern: "El :field no tiene el formato correcto.",
};
