import { useForm } from 'react-hook-form';
import Input from '@/components/Input';
import { Modal } from '@/components';
import { TPropsWithModal } from '@/types';

interface TProps {}

export default function AddUserModal({ visible, onClose }: TPropsWithModal<TProps>) {
  const { handleSubmit, register } = useForm();

  return (
    <Modal
      title="User 추가"
      visible={visible}
      onClose={() => onClose(false)}
      onOk={handleSubmit(async (formParams) => {
        const userName = formParams.userName?.trim();
        if (!userName) return;

        onClose(true);
      })}
    >
      <form>
        <Input
          className="[&_input]:w-full [&_label]:min-w-[80px]"
          label="고객명"
          {...register('userName')}
        />
      </form>
    </Modal>
  );
}
