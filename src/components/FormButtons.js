function FormButtons(props) {
  const { children } = props;
  return (
    <div className="pt-5">
      <div className="flex justify-end">{children}</div>
    </div>
  );
}
export default FormButtons;
