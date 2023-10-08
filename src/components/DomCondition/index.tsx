interface DomConditionProps {
    condition: boolean;
    children: React.ReactNode;
  }
  
  export default function DomCondition({ condition, children }: DomConditionProps) {
    return condition ? children : null;
  }
  