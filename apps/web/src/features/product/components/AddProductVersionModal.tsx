import { useForm } from 'react-hook-form';
import Input from '@/components/Input';
import { Modal } from '@/components';
import { TPropsWithModal } from '@/types';
import { useAddProductVersionMutation } from '@/features/product/hooks';

interface TProps {
  product: { [key: string]: any };
}

export default function AddProductVersionModal({
  product,
  visible,
  onClose,
}: TPropsWithModal<TProps>) {
  const { handleSubmit, register } = useForm();
  const { mutateAsync: createProductVersion } = useAddProductVersionMutation();

  return (
    <Modal
      title="Version 추가"
      visible={visible}
      onClose={() => onClose(false)}
      onOk={handleSubmit(async (formParams) => {
        const productName = formParams.productName?.trim();
        if (!productName) return;
        await createProductVersion({ productId: product.id, version: formParams.version });
        onClose(true);
      })}
    >
      <form>
        <Input label="버전" {...register('version')} />
      </form>
    </Modal>
  );
}
