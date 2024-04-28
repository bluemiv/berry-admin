import { useForm } from 'react-hook-form';
import Input from '@/components/Input';
import { Modal } from '@/components';
import { TPropsWithModal } from '@/types';

interface TProps {}

export default function AddBuyerModal({ visible, onClose }: TPropsWithModal<TProps>) {
  const { handleSubmit, register } = useForm();

  return (
    <Modal
      title="Buyer 추가"
      visible={visible}
      onClose={() => onClose(false)}
      onOk={handleSubmit(async (formParams) => {
        const [name, email] = [formParams.name, formParams.email].map((v) => v?.trim());
        if (!name) return;

        onClose(true);
      })}
    >
      <form className="flex flex-col gap-md">
        <Input
          className="[&_input]:w-full [&_label]:min-w-[80px]"
          label="고객명"
          {...register('name')}
        />
        <Input
          className="[&_input]:w-full [&_label]:min-w-[80px]"
          type="email"
          label="이메일"
          {...register('email')}
        />
      </form>
    </Modal>
  );
}
