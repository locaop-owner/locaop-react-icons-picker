import * as FontAwesome5Icons from 'react-icons/fa';
import {
  PiCalendarCheck,
  PiPhone,
  PiPhoneCall,
  PiDeviceMobileCamera,
  PiGoogleChromeLogo,
  PiEnvelopeSimple,
  PiMapPinArea,
  PiMapPinLine,
  PiStorefront,
  PiThumbsUp,
  PiXLogo,
  PiWhatsappLogo,
  PiWechatLogoDuotone,
  PiTumblrLogo,
  PiInstagramLogo,
  PiTiktokLogo,
  PiPhoneCallFill,
  PiWineFill,
  PiXLogoFill,
  PiYoutubeLogoFill,
  PiTiktokLogoFill,
  PiInstagramLogoFill,
  PiChatCircleDotsBold,
  PiCalendarCheckBold,
  PiPhoneBold,
  PiPhoneCallBold,
  PiDeviceMobileCameraBold,
  PiGoogleChromeLogoBold,
  PiEnvelopeSimpleBold,
  PiMapPinAreaBold,
  PiMapPinLineBold,
  PiStorefrontBold,
  PiThumbsUpBold,
  PiWhatsappLogoBold,
  PiTumblrLogoBold,
  PiYoutubeLogoBold,
  PiChatCircleDots,
  PiXLogoBold,
  PiTiktokLogoBold,
  PiInstagramLogoBold,
} from 'react-icons/pi';

export const FontIcon = {
  ...FontAwesome5Icons,
  PiCalendarCheck,
  PiPhone,
  PiPhoneCall,
  PiDeviceMobileCamera,
  PiGoogleChromeLogo,
  PiEnvelopeSimple,
  PiMapPinArea,
  PiMapPinLine,
  PiStorefront,
  PiThumbsUp,
  PiXLogo,
  PiWhatsappLogo,
  PiWechatLogoDuotone,
  PiTumblrLogo,
  PiInstagramLogo,
  PiTiktokLogo,
  PiPhoneCallFill,
  PiWineFill,
  PiXLogoFill,
  PiYoutubeLogoFill,
  PiTiktokLogoFill,
  PiInstagramLogoFill,
  PiChatCircleDotsBold,
  PiCalendarCheckBold,
  PiPhoneBold,
  PiPhoneCallBold,
  PiDeviceMobileCameraBold,
  PiGoogleChromeLogoBold,
  PiEnvelopeSimpleBold,
  PiMapPinAreaBold,
  PiMapPinLineBold,
  PiStorefrontBold,
  PiThumbsUpBold,
  PiWhatsappLogoBold,
  PiTumblrLogoBold,
  PiYoutubeLogoBold,
  PiChatCircleDots,
  PiXLogoBold,
  PiTiktokLogoBold,
  PiInstagramLogoBold,
};

export const iconList = Object.values(FontIcon).map((icon) => icon.name);

export type IconType = keyof typeof FontIcon;