type Props = {
    variant: 'revisão' | 'desafio' | 'default';
    onClose: () => void;
};

export function DialogBox({ variant, onClose }: Props) {
    let dialogTitle = '';
    let content = '';
    let bgColor = 'bg-[#0E7C7B]';

    switch (variant) {
        case 'revisão':
            dialogTitle = 'Revisão';
            content = 'Tarefa baseada na revisão de conteúdo!';
            bgColor = 'bg-[#14A85F]';
            break;
        case 'desafio':
            dialogTitle = 'Desafio';
            content = 'Você está indo bem nesse assunto... Vamos para o desafio!';
            bgColor = 'bg-[#d46719]';
            break;
        default:
            dialogTitle = 'Tarefa';
            content = 'Faça essa tarefa e ganhe XP!';
            break;
    }

    return (
        <div
            className={`flex flex-col gap-4 ${bgColor} text-white p-6 rounded-xl shadow-md w-[360px] max-w-[90vw]`}
        >
            <div>
                <h2 className="text-lg font-semibold mb-1">{dialogTitle}</h2>
                <p className="text-sm">{content}</p>
            </div>
            <button
                onClick={onClose}
                className="bg-white text-black text-sm px-4 py-2 rounded hover:bg-gray-100 transition self-center"
            >
                Fazer tarefa
            </button>
        </div>
    );
}
  