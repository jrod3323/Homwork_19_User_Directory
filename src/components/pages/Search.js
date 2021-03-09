import React from "react";

function Search() {
  return (
    <div className={"container"} style={{minHeight: "80%"}}>
        <h1 className={"text-center"}>Search By Breed!</h1>
        <div className={"alert alert-danger fade in"} style={{"width": "80%", "margin": "18px auto 10px", "opacity": "0"}}></div>
        <form className={"search"}>
            <div className={"form-group"}>
                <label for={"breed"}>Breed Name:</label><input type={"text"} name={"breed"} list={"breeds"} className={"form-control"} placeholder={"Type in a dog breed to begin"} id={"breed"}/>
                    <datalist id={"breeds"}>
                          {/* react state this.options??????? */}
                          {/* <option value="affenpinscher"></option> */}
                    </datalist>
                <button type={"submit"} className={"btn btn-success"}>Search</button>
            </div>
        </form>
            {/* react results list */}
            {/* <ul class="list-group search-results"></ul> */}
    </div>
  );
}

export default Search;