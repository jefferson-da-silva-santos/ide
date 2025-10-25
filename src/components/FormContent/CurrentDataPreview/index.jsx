const CurrentDataPreview = ({ label, value, isTextArea = false, loadingContent, showCurrentData }) => (
    <div className={`current-data-preview ${showCurrentData ? "" : "hidden"}`}>
      <label className="label-preview" style={{ fontSize: "0.85em" }}>
        {loadingContent ? "Carregando Dados..." : label || "Dados Atuais:"}
      </label>
      {loadingContent ? (
        <input
          type="text"
          disabled
          value="Aguarde..."
          className="preview-input loading-data"
        />
      ) : isTextArea ? (
        <textarea
          rows="4"
          disabled
          value={value}
          className="preview-input"
        ></textarea>
      ) : (
        <input type="text" disabled value={value} className="preview-input" />
      )}
    </div>
  );

  export default CurrentDataPreview