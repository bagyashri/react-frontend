import {
    NovuProvider,
    PopoverNotificationCenter,
    NotificationBell,
  } from "@novu/notification-center";
  
  function Novu() {
    return (
      <NovuProvider
             subscriberId="63c8e3d199693942c90eb0fb"
        applicationIdentifier="tIErF_y5459t"
      >
        <PopoverNotificationCenter>
          {({ unseenCount }) => <NotificationBell unseenCount={unseenCount} />}
        </PopoverNotificationCenter>
      </NovuProvider>
    );
  }
  
  export default Novu;

