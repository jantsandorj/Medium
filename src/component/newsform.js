export default function NewsForm() {
  //   const date = new Date();
  return (
    <div className="d-flex flex-column col-6 justify-content-center align-items-center">
      <label>News title</label>
      <input type="text" />
      <label>News description</label>
      <input type="text" />
      <label>Category</label>
      <div>
        <input />
      </div>
      <label>Read minutes</label>
      <input type="number" />
      <label>Is trending news ?</label>
      <div>
        <div>
          <input type="radio" id="yestrend" name="trending" />
          <label for="yestrend">Yes</label>
        </div>
        <div>
          <input type="radio" id="notrend" name="trending" />
          <label for="notrend">No</label>
        </div>
      </div>
      <div class="input-group mb-3">
        <label class="input-group-text" for="inputGroupFile01">
          Upload
        </label>
        <input type="file" class="form-control" id="inputGroupFile01" />
      </div>

      <label>Is saved ?</label>
      <div>
        <div>
          <input type="radio" id="radioYes" name="saved" />
          <label for="radioYes">Yes</label>
        </div>
        <div>
          <input type="radio" id="radioNo" name="saved" />
          <label for="radioNo">No</label>
        </div>
      </div>
    </div>
  );
}
