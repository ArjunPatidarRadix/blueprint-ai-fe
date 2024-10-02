import Button from "@/app/components/Button";
import React from "react";

interface StatementProps {
  title: string;
  isStatementAvailable?: boolean;
  onViewClick?: () => void;
  statementFor: string;
}

const Statement: React.FC<StatementProps> = ({
  title,
  isStatementAvailable = false,
  onViewClick,
  statementFor,
}) => {
  return (
    <div className="p-4 m-4 w-64 h-40 border text-center inline-block flex-col justify-between">
      <div className="text-lg font-bold">{title}</div>
      <div className="p-2 flex-grow flex items-center justify-center">
        {isStatementAvailable ? (
          <div className={`flex flex-col items-center space-y-2`} >
            <label className="upload-label cursor-pointer flex items-center justify-center">
              <span className="upload-icon text-3xl">📤</span>
              <span className="upload-text text-lg ml-2">View File</span>
            </label>
            {statementFor === "Goal" && (
              <Button
                label="Lag Measure"
                onClick={() => onViewClick && onViewClick()}
                type="button"
              />
            )}
          </div>
        ) : (
          <div className={`flex flex-col h-full justify-end`}> 
          <div className="pt-8" />
            <Button
              label="Create Statement"
              onClick={() => onViewClick && onViewClick()}
              type="button"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Statement;
