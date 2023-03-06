import {MediaFile} from '@shopify/hydrogen-react';

function ProductGallery({media}) {
  if (!media.length) {
    return null;
  }

  const typeNameMap = {
    MODEL_3D: 'Model3d',
    VIDEO: 'Video',
    IMAGE: 'MediaImage',
    EXTERNAL_VIDEO: 'ExternalVideo',
  };

  return (
    <div>
      {media.map((med, i) => {
        if (med.mediaContentType !== 'MODEL_3D') {
          return;
        }

        let extraProps = {
          interactionPromptThreshold: '0',
          ar: true,
          loading: 'eager',
          disableZoom: true,
          style: {height: '100%', margin: '0 auto'},
        };

        const data = {
          ...med,
          __typename: typeNameMap[med.mediaContentType] || typeNameMap['IMAGE'],
          image: {
            ...med.image,
            altText: med.alt || 'Product image',
          },
        };

        return (
          <div key={data.id || data.image.id} className="viewerWrapper">
            <MediaFile tabIndex="0" data={data} {...extraProps} />
          </div>
        );
      })}
    </div>
  );
}

export default ProductGallery;
