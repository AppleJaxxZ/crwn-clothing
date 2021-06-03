import React from "react";
import MenuItem from "../menu-item/menu-item.components";
//connects Directory component to the react-redux store/files/reducers
import { connect } from "react-redux";
import "./directory.styles.scss";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import { createStructuredSelector } from "reselect";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
