import { ContentWrapper } from '../../shared/content_wrapper/content-wrapper'

export const ThirdElem = ({ mouseEnterCallback, userData }) => (
  <ContentWrapper mouseEnterCallback={mouseEnterCallback}>
    <address>
      country: {userData.country}, street: {userData.street}
    </address>
  </ContentWrapper>
)
