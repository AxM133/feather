import { useDisclosure } from '@/shared/lib'
import { Modal, NavItem } from '@/shared/ui'
import { deliveryMessages } from '../config/messages'
import { CheckDeliveryForm } from './CheckDeliveryForm'

export function CheckDeliveryButton({ className }) {
  const modal = useDisclosure()

  return (
    <>
      <NavItem onClick={modal.open} className={className}>
        Check if We Deliver
      </NavItem>
      <Modal open={modal.isOpen} onClose={modal.close} title={deliveryMessages.title}>
        <CheckDeliveryForm />
      </Modal>
    </>
  )
}
