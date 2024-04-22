import { useForm } from 'react-hook-form';
import Input from '@/components/Input';
import { Modal } from '@/components';
import { TPropsWithModal } from '@/types';
import { useAddProductMutation } from '@/features/product/hooks';

interface TProps {}

export default function AddProductModal({ visible, onClose }: TPropsWithModal<TProps>) {
  const { handleSubmit, register } = useForm();
  const { mutateAsync: createProduct } = useAddProductMutation();

  return (
    <Modal
      title="Version 추가"
      visible={visible}
      onClose={() => onClose(false)}
      onOk={handleSubmit(async (formParams) => {
        const productName = formParams.productName?.trim();
        if (!productName) return;
        await createProduct(productName);
        onClose(true);
      })}
    >
      <form>
        <Input label="제품명" {...register('productName')} />
      </form>
    </Modal>
  );
}
