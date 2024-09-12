import { Component, useState } from "react";

class Displaybar extends React.Component() {
  state = { showSelectionCard, groupby, orderby };
  render() {
    return (
      <div>
        <div className="display-card">
          <button
            onClick={() =>
              this.setState({ showSelectionCard: !showSelectionCard })
            }
          >
            <img
              src="../../public/icons/display.svg"
              className="display-icon"
            />
            <h2>Display</h2>
          </button>

          <div style={{ display: showSelectionCard ? "block" : "none" }}>
            <div>
              <label>Grouping </label>
              <select onSelect={(e) => setState({ groupby: e.target.value })}>
                <option value={0}>Status</option>
                <option value={1}>User</option>
                <option value={2}>Priority</option>
              </select>
            </div>

            <div>
              <label>Ordering</label>
              <select onSelect={(e) => setState({ orderby: e.target.value })}>
                <option value={0} selected>
                  Priority
                </option>
                <option value={1}>Title</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default { Displaybar, groupby, orderby };
