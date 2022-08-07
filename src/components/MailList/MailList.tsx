import {
  MailListContainer,
  MailListTitle,
  MailListDescription,
  MailInputContainer,
} from "./styles";

export function MailList() {
  return (
    <MailListContainer>
      <MailListTitle>Save time, save money!</MailListTitle>
      <MailListDescription>
        Sign up and we'll send the best deals to you
      </MailListDescription>
      <MailInputContainer>
        <input type="text" placeholder="Your Email" />
        <button type="button">Subscribe</button>
      </MailInputContainer>
    </MailListContainer>
  );
}
