import "./PopBroseForm.css";

export function PopBroseForm() {
  return (
    <form
      className="pop-browse__form form-browse"
      id="formBrowseCard"
      action="#"
    >
      <div className="form-browse__block">
        <label htmlFor="textArea01" className="subttl">
          Описание задачи
        </label>
        <textarea
          className="form-browse__area"
          name="text"
          id="textArea01"
          readOnly
          placeholder="Введите описание задачи..."
        ></textarea>
      </div>
    </form>
  );
}
