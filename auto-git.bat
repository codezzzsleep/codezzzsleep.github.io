@REM echo "Start submitting code to the local repository"
@REM echo "The current directory is：%cd%"
git add *
@REM echo;
 
 
 
@REM echo "Commit the changes to the local repository"
@REM echo "please enter the commit info...."
@REM set /p message=
@REM set now=%date% %time%
@REM echo %now%
git commit -m "update"
@REM echo;
 
@REM echo "Commit the changes to the remote git server"
git push
@REM echo;
 
@REM echo "Batch execution complete!"
@REM echo;