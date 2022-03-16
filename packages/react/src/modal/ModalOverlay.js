import chainedFunction from 'chained-function';
import React, { forwardRef } from 'react';
import { Box } from '../box';
import { useColorMode } from '../color-mode';
import { useAnimatePresence } from '../utils/animate-presence';
import { Fade } from '../transitions';
import useModal from './useModal';

const ModalOverlay = forwardRef(({
  TransitionComponent = Fade,
  TransitionProps,
  ...rest
}, ref) => {
  const modalContext = useModal(); // context might be an undefined value
  const { isOpen } = { ...modalContext };
  const [, safeToRemove] = useAnimatePresence();
  const [colorMode] = useColorMode();
  const backgroundColor = {
    dark: 'rgba(0, 0, 0, .7)',
    light: 'rgba(0, 0, 0, .7)', // TBD: light mode is not defined yet
  }[colorMode];
  const overlayStyleProps = {
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: backgroundColor,
    zIndex: 'modal',
  };

  if (modalContext) {
    return (
      <TransitionComponent
        appear={true}
        {...TransitionProps}
        in={isOpen}
        onExited={chainedFunction(safeToRemove, TransitionProps?.onExited)}
      >
        {(state, { ref, style: transitionStyle }) => (
          <Box
            ref={ref}
            {...overlayStyleProps}
            {...transitionStyle}
            {...rest}
          />
        )}
      </TransitionComponent>
    );
  }

  return (
    <Box ref={ref} {...overlayStyleProps} {...rest} />
  );
});

ModalOverlay.displayName = 'ModalOverlay';

export default ModalOverlay;
