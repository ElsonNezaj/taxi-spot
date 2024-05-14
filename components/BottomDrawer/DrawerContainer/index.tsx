import React, { ReactElement, useEffect, useRef } from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { handleConfirmTrip } from "../../../redux/places/placesSlice";
import DrawerContent from "../DrawerContent";

export default function BottomDrawer(): ReactElement {
  const dispatch = useAppDispatch()
  const isConfirmTripVisible = useAppSelector(state => state.places.isConfirmTripVisible)

  const drawerRef = useRef<any>();

  const open = () => {
    drawerRef.current.open()
  }

  const close = () => {
    drawerRef.current.close()
  }

  useEffect(() => {
    if (isConfirmTripVisible) {
      open()
    } else {
      close()
    }
  }, [isConfirmTripVisible])

  return (
    <RBSheet
      ref={drawerRef}
      closeOnPressMask={false}
      draggable
      dragOnContent
      onClose={() => dispatch(handleConfirmTrip(false))}
      customStyles={{
        wrapper: {
        },
        container: {
          borderTopStartRadius: 35,
          borderTopEndRadius: 35
        },
        draggableIcon: {
          display: "none"
        }
      }}
    >
      <DrawerContent />
    </RBSheet>
  )
}