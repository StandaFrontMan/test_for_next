import { ContentWrapper } from '../../shared/content_wrapper/content-wrapper'

export const SecondElem = ({ mouseEnterCallback, content }) => (
  <ContentWrapper mouseEnterCallback={mouseEnterCallback}>
    <p>{content}</p>
  </ContentWrapper>
)
