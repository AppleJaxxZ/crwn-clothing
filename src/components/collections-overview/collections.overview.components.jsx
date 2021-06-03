import React from "react";
import { selectCollectionsForPreview } from "./../../redux/shop/shop.selectors";
import "../collections-overview/collections-overview.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "./../collection-preview/collection-preview.component";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
