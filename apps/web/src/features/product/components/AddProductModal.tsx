import { useForm } from 'react-hook-form';
import Input from '@/components/Input';
import { Modal } from '@/components';
import { TPropsWithModal } from '@/types';

interface TProps {}

export default function AddProductModal({ visible, onClose }: TPropsWithModal<TProps>) {
  const { handleSubmit, register } = useForm();

  return (
    <Modal title="Product 추가" visible={visible} onClose={() => onClose(false)}>
      <form
        onSubmit={handleSubmit((formParams) => {
          console.log(formParams);
        })}
      >
        <Input label="제품명" {...register('productName')} />
      </form>
    </Modal>
  );
}
