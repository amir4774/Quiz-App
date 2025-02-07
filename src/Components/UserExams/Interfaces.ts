export interface UserExamsTitleProps {
    category: 'Linux' | 'Code' | 'Docker' | 'DevOps' | 'SQL' | 'Random';
    difficulty: string;
    rate: number;
}

export interface UserExamsResultProps {
    corrects: number;
    question_numbers: number;
}

export interface LearnMoreProps {
    category: 'Linux' | 'Code' | 'Docker' | 'DevOps' | 'SQL';
}

export interface UserExamsCollapseButtonProps {
    open: boolean;
    toggleOpen: () => void;
    text: string;
}
