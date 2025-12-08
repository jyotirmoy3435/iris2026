$file = 'src\components\EventsPage\EventsPage.tsx'
$content = Get-Content $file -Raw

# Replace event 6 - remove description, detailedDescription, date
$old = @"
  {
    id: "6",
    title: "Hackwise",
    category: "Management",
    description: "'Innovate, Implement, Inspire: Unleash the Power of AI!'",
    detailedDescription:
      "The IEEE Technology and Engineering Management Society (TEMS) Chapter at IIM Indore is proud to present its flagship Hackathon as part of the annual fest IRIS at IIM Indore. Centered around the theme of Artificial Intelligence, this event aims to provide a platform for the brightest minds to showcase their ingenuity, technical prowess, and problem-solving skills. The competition will unfold in two distinct phases: a Quiz Round to test participants' foundational and advanced knowledge of AI, followed by a Hackathon Round, where teams will design and implement innovative AI solutions to address real-world challenges. With exciting problem statements and an opportunity to compete against some of the most talented teams, this event is designed to foster creativity, collaboration, and impactful innovations",
    date: "Oct 27, 2025",
    link: "https://unstop.com/hackathons/hackwise-2026-iris-2026-iim-indores-flagship-fest-iim-indore-1597411",

  },
"@

$new = @"
  {
    id: "6",
    title: "Hackwise",
    category: "Management",
    link: "https://unstop.com/hackathons/hackwise-2026-iris-2026-iim-indores-flagship-fest-iim-indore-1597411",
  },
"@

$newContent = $content.Replace($old, $new)
Set-Content $file -Value $newContent
Write-Host "Event 6 cleaned successfully"
