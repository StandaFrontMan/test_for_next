import { ContentWrapper } from '../../shared/content_wrapper/content-wrapper'

export const FirstElem = ({ mouseEnterCallback, imgSrc, imgAlt }) => (
  <ContentWrapper mouseEnterCallback={mouseEnterCallback}>
    <img src={imgSrc} alt={imgAlt} />
  </ContentWrapper>
)
